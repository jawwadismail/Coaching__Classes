upgraded to angular 8
ng add @angular/material

In App.module.ts: import { MatbuttonModule } from '@angular/material';
                  Also add it into imports array MatbuttonModule
                        OR
make a module and add it to app.module.ts
in materialmodule remove declarations and include exports
and:
const MaterialComponents = [
  MatButtonModule
]
Add MaterialComponents to import and exports

in angular.json chagne output directory to ..slash public
ng build

<button mat-raised-button>Hello World</button>: To any html file
