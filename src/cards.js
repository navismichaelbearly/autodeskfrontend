const cards = [
    {
       "id":1,
       "icon":"https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20200109065713/images/api-icons/icon-oauth.svg",
       "name":"Authentication",
       "description": "Generate tokens based on the OAuth 2.0 standard to authenticate requests made to Forge APIs and SDKs.",
       "items":[ {"name":"Developers guide","connect":"/developer/en/api/authentication/guide"},
                 {"name":"API reference","connect":"/developer/en/api/authentication/reference"}],
       "created_at":"2020-02-11T11:18:01.451Z",
       "updated_at":"2020-02-11T11:18:01.451Z"
    },
    {
      "id":2,
      "icon":"https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20200109065713/images/api-icons/icon-bim360.svg",
      "name":"BIM 360",
      "description": "Integrate with the Autodesk BIM 360 platform to extend its capabilities to reach segments of the construction ecosystem that don’t have direct access to BIM data.",
      "items":[ {"name":"Introduction","connect":"/developer/en/api/bim360/intro"},
                {"name":"Developers guide","connect":"en/api/bim360/guide"},
                {"name":"API reference","connect":"en/api/bim360/reference"}],
      "created_at":"2020-02-11T11:18:01.451Z",
      "updated_at":"2020-02-11T11:18:01.451Z"
    },
    {
       "id":3,
       "icon":"https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20200109065713/images/api-icons/icon-data-management.svg",
       "name" : "Data Management",
       "description": "Access data across BIM 360 team, Fusion Team, BIM 360 Docs, and the Object Storage Service to build apps to display and extend your data in ways that add value to your users.",
       "items":[ {"name":"Introduction","connect":"/developer/en/api/datamanagement/intro"},
                 {"name":"Developers guide","connect":"en/api/datamanagement/guide"},
                 {"name":"API reference","connect":"en/api/datamanagement/reference"}],
       "created_at":"2020-02-11T09:32:54.213Z",
       "updated_at":"2020-02-11T09:32:54.213Z"
    },
    {
       "id":7,
       "icon":"https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20200109065713/images/api-icons/icon-design-automation.svg",
       "name" : "Design Automation",
       "description": "Automate repetitive tasks by leveraging on the scale of the Forge Platform and running scripts on your design files in the cloud.",
       "items":[ {"name":"Introduction","connect":"/developer/en/api/designautomation/intro"},
                 {"name":"Developers guide","connect":"en/api/designautomation/guide"},
                 {"name":"API reference","connect":"en/api/designautomation/reference"}],
       "created_at":"2020-02-11T09:32:54.195Z",
       "updated_at":"2020-02-11T09:32:54.195Z"
    },
    {
       "id":6,
       "icon":"https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20200109065713/images/api-icons/icon-model-derivative.svg",
       "name" : "Model Derivative",
       "description": "Derive outputs viewable by the Forge Viewer from more than 60 CAD file formats, and extract metadata about the models as well as the individual objects within the model.",
       "items":[ {"name":"Introduction","connect":"/developer/en/api/modelderivative/intro"},
                 {"name":"Developers guide","connect":"en/api/modelderivative/guide"},
                 {"name":"API reference","connect":"en/api/modelderivative/reference"}],
       "created_at":"2020-02-11T09:32:54.191Z",
       "updated_at":"2020-02-11T09:32:54.191Z"
    },
    {
       "id":7,
       "icon":"https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20200109065713/images/api-icons/icon-reality-cap.svg",
       "name" : "Reality Capture",
       "description": "Convert digital images into high resolution textured meshes, dense point clouds and orthophotos.",
       "items":[ {"name":"Introduction","connect":"/developer/en/api/realitycapture/intro"},
                 {"name":"Developers guide","connect":"en/api/realitycapture/guide"},
                 {"name":"API reference","connect":"en/api/realitycapture/reference"}],
       "created_at":"2020-02-11T09:32:54.187Z",
       "updated_at":"2020-02-11T09:32:54.187Z"
    },
    {
       "id":8,
       "icon":"https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20200109065713/images/api-icons/tokenflex.svg",
       "name" : "Token Flex",
       "description": "Access Autodesk Token Flex Usage Data platform to generate reports on consumption, usage, and contract details.",
       "items":[ {"name":"Introduction","connect":"/developer/en/api/tokenflex/intro"},
                 {"name":"Developers guide","connect":"en/api/tokenflex/guide"},
                 {"name":"API reference","connect":"en/api/tokenflex/reference"}],
       "created_at":"2020-02-11T09:32:54.187Z",
       "updated_at":"2020-02-11T09:32:54.187Z"
    },
    {
       "id":8,
       "icon":"https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20200109065713/images/api-icons/icon-viewer.svg",
       "name" : "Viewer",
       "description": "Render 3D and 2D model data within a browser. The models can come from a wide range of applications such as AutoCAD, Fusion 360, Revit, and many more.",
       "items":[ {"name":"Introduction","connect":"/developer/en/api/viewer/intro"},
                 {"name":"Developers guide","connect":"en/api/viewer/guide"},
                 {"name":"API reference","connect":"en/api/viewer/reference"}],
       "created_at":"2020-02-11T09:32:54.187Z",
       "updated_at":"2020-02-11T09:32:54.187Z"
    },
    {
       "id":9,
       "icon":"https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20200109065713/images/api-icons/icon-webhook.svg",
       "name" : "Webhooks",
       "description": "Subscribe to and receive notifications of the occurrence of events within the Forge eco system.",
       "items":[ {"name":"Introduction","connect":"/developer/en/api/webhooks/intro"},
                 {"name":"Developers guide","connect":"en/api/webhooks/guide"},
                 {"name":"API reference","connect":"en/api/webhooks/reference"}],
       "created_at":"2020-02-11T09:32:54.187Z",
       "updated_at":"2020-02-11T09:32:54.187Z"
    }
 ];
 export {cards};
