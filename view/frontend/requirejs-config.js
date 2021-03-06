/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*jshint browser:true jquery:true*/
/*global alert*/
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/view/shipping': {
                'Nord_Shipfunk/js/view/shipping-mixin': true
            },
            //'Magento_Checkout/js/model/address-converter': {
            //    'Nord_Shipfunk/js/model/address-converter-mixin': true
            //},
            'Magento_Checkout/js/model/checkout-data-resolver': {
                'Nord_Shipfunk/js/model/checkout-data-resolver-mixin': true
            },
            'Magento_Checkout/js/model/resource-url-manager': {
                'Nord_Shipfunk/js/model/resource-url-manager-mixin': true
            }
        }
    },
    map: {
        "*": {
            "Magento_Checkout/template/shipping.html": "Nord_Shipfunk/template/shipping.html",
            "Magento_Checkout/template/shipping-address/shipping-method-list": "Nord_Shipfunk/template/shipping-address/shipping-method-list",
            "Magento_Checkout/template/shipping-address/shipping-method-item": "Nord_Shipfunk/template/shipping-address/shipping-method-item",
            "Magento_Checkout/js/model/shipping-service": "Nord_Shipfunk/js/model/shipping-service-mixin",
            "Magento_Checkout/template/shipping-information": "Nord_Shipfunk/template/shipping-information",
            "Magento_Checkout/js/model/shipping-save-processor/default": "Nord_Shipfunk/js/model/shipping-save-processor/default"
        }
    },
    deps: [
        "Nord_Shipfunk/js/main"
    ]
};
