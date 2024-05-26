import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
    declarations: [NavbarComponent, FooterComponent],
    imports: [CommonModule],
    exports: [NavbarComponent, FooterComponent],
    schemas:[
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule {}
