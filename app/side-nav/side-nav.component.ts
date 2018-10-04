import {
  ChangeDetectorRef,
  Component,
  OnInit, ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
// import { NavigationItemConfig } from 'patternfly-ng/navigation';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'side-nav-component',
  styles: [`
    .faux-layout {
      position: fixed;
      top: 37px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #f5f5f5;
      padding-top: 15px;
      z-index: 1100;
    }
    .example-page-container.container-fluid {
      position: fixed;
      top: 37px;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #f5f5f5;
      padding-top: 15px;
    }

    .hide-vertical-nav {
      margin-top: 15px;
      margin-left: 30px;
    }

    .navbar-brand-txt {
      line-height: 34px;
    }
  `],
  templateUrl: '/app/side-nav/side-nav.component.html'
})
export class SideNavComponent implements OnInit {

  showExample: boolean = false;
  // navigationItems: NavigationItemConfig[];
  navigationItems: any[];
  actionText: string = '';

  constructor(private chRef: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit(): void {
    this.navigationItems = [
      {
        title: 'Dashboard',
        iconStyleClass: 'fa fa-dashboard',
        url: '/dashboard'
      },
      {
        title: 'Dolor',
        iconStyleClass: 'fa fa-shield',
        url: '/dashboard',
        badges: [
          {
            count: 1283,
            tooltip: 'Total number of items'
          }
        ]
      },
      {
        title: 'Ipsum',
        iconStyleClass: 'fa fa-space-shuttle',
        children: [
          {
            title: 'Intellegam',
            children: [
              {
                title: 'Recteque',
                url: '/dashboard',
                badges: [
                  {
                    count: 6,
                    tooltip: 'Total number of error items',
                    badgeClass: 'example-error-background'
                  }
                ]
              },
              {
                title: 'Suavitate',
                url: '/dashboard',
                badges: [
                  {
                    count: 2,
                    tooltip: 'Total number of items'
                  }
                ]
              },
              {
                title: 'Vituperatoribus',
                url: '/dashboard',
                badges: [
                  {
                    count: 18,
                    tooltip: 'Total number of warning items',
                    badgeClass: 'example-warning-background'
                  }
                ]
              }
            ]
          },
          {
            title: 'Copiosae',
            children: [
              {
                title: 'Exerci',
                url: '/dashboard',
                badges: [
                  {
                    count: 2,
                    tooltip: 'Total number of error items',
                    iconStyleClass: 'pficon pficon-error-circle-o'
                  },
                  {
                    count: 6,
                    tooltip: 'Total number warning error items',
                    iconStyleClass: 'pficon pficon-warning-triangle-o'
                  }
                ]
              },
              {
                title: 'Quaeque',
                url: '/dashboard',
                badges: [
                  {
                    count: 0,
                    tooltip: 'Total number of error items',
                    iconStyleClass: 'pficon pficon-error-circle-o'
                  },
                  {
                    count: 4,
                    tooltip: 'Total number warning error items',
                    iconStyleClass: 'pficon pficon-warning-triangle-o'
                  }
                ]
              },
              {
                title: 'Utroque',
                url: '/dashboard',
                badges: [
                  {
                    count: 1,
                    tooltip: 'Total number of error items',
                    iconStyleClass: 'pficon pficon-error-circle-o'
                  },
                  {
                    count: 2,
                    tooltip: 'Total number warning error items',
                    iconStyleClass: 'pficon pficon-warning-triangle-o'
                  }
                ]
              }
            ]
          },
          {
            title: 'Patrioque',
            children: [
              {
                title: 'Novum',
                url: '/dashboard'
              },
              {
                title: 'Pericula',
                url: '/dashboard'
              },
              {
                title: 'Gubergren',
                url: '/dashboard'
              }
            ]
          },
          {
            title: 'Accumsan',
            url: '/dashboard',
            badges: [
              {
                count: 2,
                tooltip: 'Total number of error items',
                iconStyleClass: 'pficon pficon-error-circle-o'
              },
              {
                count: 6,
                tooltip: 'Total number warning error items',
                iconStyleClass: 'pficon pficon-warning-triangle-o'
              }
            ]
          }
        ]
      },
      {
        title: 'Amet',
        iconStyleClass: 'fa fa-paper-plane',
        children: [
          {
            title: 'Detracto',
            children: [
              {
                title: 'Delicatissimi',
                url: '/dashboard'
              },
              {
                title: 'Aliquam',
                url: '/dashboard'
              },
              {
                title: 'Principes',
                url: '/dashboard'
              }
            ]
          },
          {
            title: 'Mediocrem',
            children: [
              {
                title: 'Convenire',
                url: '/dashboard'
              },
              {
                title: 'Nonumy',
                url: '/dashboard'
              },
              {
                title: 'Deserunt',
                url: '/dashboard'
              }
            ]
          },
          {
            title: 'Corrumpit',
            children: [
              {
                title: 'Aeque',
                url: '/dashboard'
              },
              {
                title: 'Delenit',
                url: '/dashboard'
              },
              {
                title: 'Qualisque',
                url: '/dashboard'
              }
            ]
          },
          {
            title: 'urbanitas',
            url: '/dashboard'
          }
        ]
      },
      {
        title: 'Adipscing',
        iconStyleClass: 'fa fa-graduation-cap',
        url: '/dashboard'
      },
      {
        title: 'Lorem',
        iconStyleClass: 'fa fa-gamepad',
        url: '/dashboard'
      }
    ];
  }

  toggleExample(): void {
    this.showExample = !this.showExample;
    this.chRef.detectChanges();
  }

  onItemClicked($event: any): void {
    this.actionText += 'Item Clicked: ' + $event.title + '\n';
  }

  onNavigation($event: any): void {
    this.actionText += 'Navigation event fired: ' + $event.title + '\n';
  }
}
