(ns app.main
  (:require
    [reagent.core :as reagent]
    [app.views.app :refer [app]]
    [app.ramdaExtensionDocs :refer [init-data]]))

(defn main! []
  (init-data)
  (reagent/render [app]
                  (.getElementById js/document "app")))

(main!)