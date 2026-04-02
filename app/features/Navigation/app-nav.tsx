import useRealmSelection from "~/hooks/use-realm-Selection"
import RealmSelect from "../Realm/RealmSelect"

const AppNavigationMenu = () => {
  const { realms, isLoading, selectRealm } = useRealmSelection()

  return (
    <RealmSelect realms={realms} isLoading={isLoading} onChange={selectRealm} />
  )
}

export default AppNavigationMenu
