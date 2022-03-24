import {  CanActivate, RouterStateSnapshot,ActivatedRouteSnapshot, Router, PRIMARY_OUTLET, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import { promise } from "protractor";
import { Injectable } from "@angular/core";
import { debounceTime, take } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate{
    private router: Router;
constructor(router: Router ){
    this.router = router;
}

canActivate(route: ActivatedRouteSnapshot, routerStateSnapshot:RouterStateSnapshot):Observable<boolean>|boolean
{


    if ( this.isPageRefresh() ) {
     
     // console.log(this.getUrlWithoutSecondary( routerStateSnapshot ));
        
         
let loggedUser = localStorage.getItem('loggeduser');

if(loggedUser !='' && loggedUser !=null)
 {
    return( true );
 }else{
    //this.router.navigateByUrl( this.getUrlWithoutSecondary( routerStateSnapshot ) );
    this.router.events.pipe(
        debounceTime(50),
        take(1)
    ).toPromise().then(()=>{
        //now that the router has settled, navigate to your new route
        return this.router.navigateByUrl("/")   
    });
  //   this.router.navigateByUrl['/'];
  //   return( false );
 }




        }else{


let loggedUser = localStorage.getItem('loggeduser');

if(loggedUser !='' && loggedUser !=null)
 {
     return true;
 }else{
     this.router.navigate['/'];
 }

}

}
// I determine if the requested route can be activated (ie, navigated to).


private isPageRefresh() : boolean {
 
    // If the router has yet to establish a single navigation, it means that this
    // navigation is the first attempt to reconcile the application state with the
    // URL state. Meaning, this is a page refresh.
    return( ! this.router.navigated );
     
    }


// I return the requested URL (as defined in the snapshot), less any the "secondary"
// named-outlet segments.
private getUrlWithoutSecondary( routerStateSnapshot: RouterStateSnapshot ) : UrlTree {
 
    var urlTree = this.router.parseUrl( routerStateSnapshot.url );
    var segment = urlTree.root;
     
    // Since the "secondary" outlet is known to be directly off the primary view
    // (ie, not nested within another named-outlet), we're going to walk down the
    // tree of primary outlets and delete any "secondary" children. This should
    // leave us with a UrlTree that contains everything that the original URL had,
    // less the "secondary" named-outlet.
    while ( segment && segment.children ) {
     
    delete( segment.children.secondary );
     
    segment = segment.children[ PRIMARY_OUTLET ];
     
    }
     
    return( urlTree );
     
    }



}