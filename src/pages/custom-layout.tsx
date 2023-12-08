import { CustomAppBar } from "@/widgets/custom-app-bar";
import { forwardRef } from "react";
import { AppBar, Layout, UserMenu, useLogin, useLogout } from "react-admin";
import ExitIcon from "@mui/icons-material/ExitToApp"


const LogoutButton = forwardRef((props, ref: any) => {
  const logout = useLogout()
  const handleClick = () => {
    logout()
  }

  return (
    <button 
      ref={ref}
      onClick={handleClick}
      {...props}
      className="flex items-center gap-3 py-2 px-4"
    >
      <ExitIcon/>
      Logout
    </button>
  )
})

const AdminMenu = () => {
  return (
    <UserMenu>
      <LogoutButton />
    </UserMenu>
  )
}

const AdminAppBar = () => {
  return (
    <AppBar userMenu={<AdminMenu />} />
  )
}

const AdminLayout = (props: any) => <Layout {...props} appBar={AdminAppBar} />;

export default AdminLayout