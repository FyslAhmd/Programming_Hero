import "./App.css";
import ControlField from "./components/controlField/ControlField";
import FamilyTree from "./components/familyTree/FamilyTree";
import FormAction from "./components/formAction/FormAction";
import HookForm from "./components/hookForm/HookForm";
import ProductManagement from "./components/productManagement/ProductManagement";
import SimpleForm from "./components/simpleForm/SimpleForm";

function App() {
  return (
    <>
      <h1 className="text-3xl text-center">Explore react form</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormAction></FormAction> */}
      {/* <ControlField></ControlField> */}
      {/* <HookForm></HookForm> */}
      {/* <ProductManagement></ProductManagement> */}
      <FamilyTree></FamilyTree>
    </>
  );
}

export default App;
