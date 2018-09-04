(ns app.views.app
  (:require [app.ramdaExtensionDocs :refer [ramda-extension-docs]]))

(defn app []
    [:div [:h2 "RAMDA-EXTENSION !!!!!!!!!!!!!!!!!!"]
      [:ul
       (for [i @ramda-extension-docs]
         [:li {:key (:name i)} i])]])