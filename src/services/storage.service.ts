import { Injectable } from "@angular/core";
import { LocalUser } from "../models/local_user";
import { STORAGE_KEYS } from "../config/storage_keys_config";
import { Cart } from "../models/cart";

@Injectable()
export class StorageService {

    getLocalUser(): LocalUser {
        let user = localStorage.getItem(STORAGE_KEYS.localUser);
        return (user == null) ? null : JSON.parse(user);
    }

    setLocalUser(obj: LocalUser) {
        if(obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        } else {
            localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
        }
    }

    getCart() : Cart {        
        let str = localStorage.getItem(STORAGE_KEYS.cart);

        return (str != null) ? JSON.parse(str) : null;
    }

    setCart(obj : Cart) {
        if(obj != null) {
            localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(obj));
        } else {
            localStorage.removeItem(STORAGE_KEYS.cart);
        }
    }
}