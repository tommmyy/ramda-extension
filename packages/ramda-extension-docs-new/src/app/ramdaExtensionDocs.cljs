(ns app.ramdaExtensionDocs
  (:require [reagent.core :as r]
            [ajax.core :refer [GET POST]]
            ))

(def ramda-extension-docs (r/atom {}))

(defn save-bitch [response]
  (reset! ramda-extension-docs response))

(defn init-data []
  (GET "/ramda-extension.json" {:handler save-bitch
                                :response-format :json
                                :keywords? true})
  )