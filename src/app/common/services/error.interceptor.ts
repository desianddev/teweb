import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry, map, finalize } from "rxjs/operators";
import { Router } from "@angular/router";
import swal from "sweetalert2";
import { NgxUiLoaderService } from "ngx-ui-loader";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private pendingRequests = 0;
  constructor(private _router:Router,private ngxUiLoaderService: NgxUiLoaderService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // if (!req.url.includes(paths.error)) {
    //   return next.handle(req);
    // }

    this.ngxUiLoaderService.start();
    console.log('hi')
    return next.handle(req).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
      
        if (error.status === 400 ||error.status === 500 ) {
          // 401 handled in auth.interceptor
         // this.toastr.error(error.message);
         const err :any=error
       
           console.log(err.error.errorMessages.join("<br />"))
           swal({
             title:"Error",
             html:err.error.errorMessages.join("<br />"),
             type:"error"
           });
       
        }
        return throwError(error);
      }),
        map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        
         
         // let camelCaseObject = mapKeys(event.body, (v, k) => camelCase(k));
         // const modEvent = event.clone({ body: camelCaseObject });
        //  if(event.body){
           
        //   if(event.body.status=="201" && event.body.message[0]=="Unauthorized access." ||event.body.message[0]=="Session expired or invalid key.")
        //     {
        //       console.log('Unauthorized access')
        //       localStorage.clear();
        //       swal("Session Expired", "Please login again","success").then((result) => {
        //       this._router.navigate(['/account/sign-in']);  });
        //       return event;
        //     }else{
        //       return event;
        //     }

          
        //   }else{
        
        //   return event;
        //   }
        return event;
        }
      }),
      finalize(() => {
        this.pendingRequests--;
        //console.log('final')
        if (!this.pendingRequests) {
         
          this.ngxUiLoaderService.stop();
        }
      })
    );
  }
}
