import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class MaterialModule { }
