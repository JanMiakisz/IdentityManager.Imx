/*
 * ONE IDENTITY LLC. PROPRIETARY INFORMATION
 *
 * This software is confidential.  One Identity, LLC. or one of its affiliates or
 * subsidiaries, has supplied this software to you under terms of a
 * license agreement, nondisclosure agreement or both.
 *
 * You may not copy, disclose, or use this software except in accordance with
 * those terms.
 *
 *
 * Copyright 2021 One Identity LLC.
 * ALL RIGHTS RESERVED.
 *
 * ONE IDENTITY LLC. MAKES NO REPRESENTATIONS OR
 * WARRANTIES ABOUT THE SUITABILITY OF THE SOFTWARE,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE, OR
 * NON-INFRINGEMENT.  ONE IDENTITY LLC. SHALL NOT BE
 * LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE
 * AS A RESULT OF USING, MODIFYING OR DISTRIBUTING
 * THIS SOFTWARE OR ITS DERIVATIVES.
 *
 */

import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';

import { ExtService, MenuItem, MenuService, TabItem } from 'qbm';
import { canSeeAttestationPolicies, isAttestationAdmin } from './admin/permissions-helper';
import { PermissionsService } from './admin/permissions.service';
import { DashboardPluginComponent } from './dashboard-plugin/dashboard-plugin.component';
import { AttestationWrapperComponent } from './runs/attestation/attestation-wrapper/attestation-wrapper.component';

@Injectable({ providedIn: 'root' })
export class InitService {
  constructor(
    private readonly extService: ExtService,
    private readonly router: Router,
    private readonly menuService: MenuService,
    private readonly permissions: PermissionsService
  ) {
    this.setupMenu();
  }

  public onInit(routes: Route[]): void {
    this.addRoutes(routes);

    this.extService.register('Dashboard-SmallTiles', { instance: DashboardPluginComponent });
    this.extService.register('groupSidesheet', {
      instance: AttestationWrapperComponent, inputData:
      {
        id: 'attestations',
        label: '#LDS#Attestation',
        checkVisibility: async _ => this.permissions.isAttestationAdmin()
      },
      sortOrder: 0
    } as TabItem);
    this.extService.register('identitySidesheet', {
      instance: AttestationWrapperComponent, inputData: {
        id: 'attestations',
        label: '#LDS#Attestation',
        checkVisibility: async _ => this.permissions.isAttestationAdmin()
      },
      sortOrder: 0
    } as TabItem);
  }

  private addRoutes(routes: Route[]): void {
    const config = this.router.config;
    routes.forEach(route => {
      config.unshift(route);
    });
    this.router.resetConfig(config);
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories((preProps: string[], groups: string[]) => {
      if (!preProps.includes('ATTESTATION')) {
        return null;
      }

      const menu: MenuItem = {
        title: '#LDS#Attestation',
        sorting: '20',
        items: [
          {
            id: 'ATT_Attestation_PendingAttestations',
            route: 'attestation/decision',
            title: '#LDS#Menu Entry Pending attestations',
            sorting: '20-10',
          },
          {
            id: 'ATT_Attestation_AttestationHistory',
            route: 'attestation/history',
            title: '#LDS#Menu Entry Attestation history',
            sorting: '20-20'
          }
        ]
      };

      if (canSeeAttestationPolicies(groups)) {
        menu.items.push({
          id: 'ATT_Attestation_AttestationRuns',
          route: 'attestation/runs',
          title: '#LDS#Menu Entry Attestation runs',
          description: '#LDS#Shows an overview of attestation runs along with a progress prediction.',
          sorting: '20-30',
        });

        menu.items.push({
          id: 'ATT_Attestation_AttestationPolicies',
          route: 'attestation/policies',
          title: '#LDS#Menu Entry Attestation policies',
          description: '#LDS#Shows an overview of attestation policies.',
          sorting: '20-40',
        });
      }

      if (isAttestationAdmin(groups)) {
        menu.items.push({
          id: 'ATT_Attestation_AttestationPreselection',
          route: 'attestation/preselection',
          title: '#LDS#Menu Entry Sample data',
          description: '#LDS#Shows an overview of samples.',
          sorting: '20-50',
        });
      }

      return menu;
    },
      (preProps: string[], __: string[]) => {
        if (!preProps.includes('ITSHOP')) {
          return null;
        }

        return {
          id: 'ROOT_Responsibilities',
          title: '#LDS#Responsibilities',
          sorting: '30',
          items: [
            {
              id: 'QER_Responsibilities_AssignDevice',
              route: 'claimdevice',
              title: '#LDS#Menu Entry Device ownership',
              sorting: '30-20',
            }
          ]
        };
      });
  }
}
