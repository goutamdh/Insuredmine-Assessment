import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

/**
 * Component that wanted to use this feature has to implement this interface
 *
 * @export
 * @interface CanComponentDeactivate
 */
export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

/**
 * Module for managing component deactivate
 *
 * @export
 * @class CanDeactivateGuard
 * @implements {CanDeactivate<CanComponentDeactivate>}
 */
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
