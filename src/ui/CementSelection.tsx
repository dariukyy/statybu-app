import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Label from "./Label";

function CementSelection() {
  return (
    <div className="flex justify-center items-center gap-8">
      <Label htmlFor="cement">Cementas</Label>
      <Select>
        <SelectTrigger id="cement" className="w-full">
          <SelectValue placeholder="Pasirinkite cemento tipą" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="CEM I 52,5 R">CEM I 52,5 R</SelectItem>
          <SelectItem value=" CEM I 42,5 R">CEM I 42,5 R</SelectItem>
          <SelectItem value="CEM I 42,5 N">CEM I 42,5 N</SelectItem>
          <SelectItem value="CEM II/A-LL 42,5 N">CEM II/A-LL 42,5 N</SelectItem>
          <SelectItem value="CEM II/A-LL 42,5 R">CEM II/A-LL 42,5 R</SelectItem>
          <SelectItem value="CEM II/A-S 42,5N">CEM II/A-S 42,5N</SelectItem>
          <SelectItem value="CEM III/B 32,5N-LH /SR">
            CEM III/B 32,5N-LH /SR
          </SelectItem>
          <SelectItem value="CEM I 42,5N-SR3">CEM I 42,5N-SR3</SelectItem>
          <SelectItem value="CEM II/A-P 52,5N">CEM II/A-P 52,5N</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CementSelection;
