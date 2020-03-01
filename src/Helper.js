export function getType(inputAbr) {
  let typeofdoc = "";
  switch(inputAbr) {
    case "authentication":
      typeofdoc = "Authentication";
      break;
    case "bim360":
      typeofdoc = "BIM 360";
      break;
    case "datamanagement":
      typeofdoc = "Data Management";
      break;
    case "designautomation":
      typeofdoc = "Design Automation";
      break;
    case "modelderivative":
      typeofdoc = "Model Derivative"
      break;
    case "realitycapture":
      typeofdoc = "Reality Capture";
      break;
    case "tokenflex":
      typeofdoc = "Token Flex";
      break;
    case "viewer":
      typeofdoc = "Viewer";
      break;
    case "webhooks":
      typeofdoc = "Web Hooks";
      break;
    default:
      typeofdoc = "Default";
  }
  return typeofdoc
}
