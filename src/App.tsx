import AppRouterBasic from "./modules/router/basic-routing/AppRouterBasic"
import AppDynamic from "./modules/router/react-router-dynamic/AppDynamic"
import AppNavigate from "./modules/router/react-router-useNavigate/AppNavigate"

const App = () => {
  return (
    <div>
      {/* <AppRouterBasic/> */}
      {/* <AppDynamic/> */}
      <AppNavigate/>
    </div>
  )
}

export default App