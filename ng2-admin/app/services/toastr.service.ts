import { Injectable, Inject } from '@angular/core';
import { ToasterService } from 'angular2-toaster/angular2-toaster';
import { Response } from '@angular/http';

@Injectable()
export class ToastrService {

  constructor(@Inject(ToasterService) private toastr: ToasterService) {}

  public error(error: Response | any) {
    if (error instanceof Response) {
      const body = error.json() || '';
      this.toastr.pop('error', error.statusText, body.error || JSON.stringify(body));
    } else {
      this.toastr.pop('error', error.statusText || '', error.message || error.toString());
    }

  }


}
