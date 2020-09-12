import { Component, TemplateRef } from '@angular/core';
import { ToasterService } from './services/toaster.service';

@Component({
  selector: 'app-custom-toaster',
  templateUrl: './custom-toaster.component.html',
  styleUrls: ['./custom-toaster.component.css'],
  host: { '[class.ngb-toasts]': 'true' },
})
export class CustomToasterComponent {

  constructor(public toastService: ToasterService) { }

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }

}
