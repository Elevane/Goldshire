import { Loader } from "lucide-react"
import {
  SelectContent,
  SelectGroup,
  SelectTrigger,
  Select,
  SelectValue,
  SelectLabel,
  SelectItem,
} from "~/components/ui/select"
import type { Realm } from "~/models/realm"

type Props = {
  realms: Realm[]
  isLoading: boolean
  onChange: (value: string) => void
}

const RealmSelect = ({ realms, isLoading, onChange }: Props) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue
          placeholder={
            realms.length > 0 && !isLoading
              ? "Select a realm"
              : "No realms available"
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>
            {isLoading ? "Loading realms..." : "Realms"}
          </SelectLabel>

          {isLoading ? (
            <SelectItem value="loading">
              <Loader className="animate-spin" />
            </SelectItem>
          ) : (
            realms.map((realm) => (
              <SelectItem key={realm.id} value={realm.name}>
                {realm.name}
              </SelectItem>
            ))
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
export default RealmSelect
