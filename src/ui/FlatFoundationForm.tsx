import { useForm } from "react-hook-form";
import Label from "./Label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FlatFoundationImg from "@/assets/plytinis.jpeg";
import { calculateAll } from "@/lib/helpers";
import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import Tooltip from "./Tooltip";
import { FormInput } from "./FormInput";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

export type formData = {
  length: number;
  width: number;
  height: number;
  cementType: string;
  armature: string;
};

type FlatResultType = {
  perimeter: number;
  baseArea: number;
  sideArea: number;
  soilLoad: number;
  concreteWeight: number;
  concreteVolume: number;
};

function FlatFoundationForm() {
  const [result, setResult] = useState<FlatResultType | null>(null);
  const [armatureDropdown, setArmatureDropdown] = useState<boolean>(false);
  const [armatureValue, setArmatureValue] = useState<number>(11.7);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<formData>();

  function onSubmit(data: formData) {
    const width = Number(data.width);
    const length = Number(data.length);
    const height = Number(data.height);

    const {
      baseArea,
      concreteVolume,
      concreteWeight,
      perimeter,
      sideArea,
      soilLoad,
    } = calculateAll(width, length, height);

    setResult({
      perimeter,
      baseArea,
      sideArea,
      soilLoad,
      concreteWeight,
      concreteVolume,
    });

    alert(
      `Perimetras yra ${perimeter} m. Plotas yra ${baseArea} m2. Šoninė plotas yra ${sideArea} m2. Krūvis yra ${soilLoad} kg/cm2. Betono svoris yra ${concreteWeight} kg. Betono tūris yra ${concreteVolume} m3.`
    );
    setArmatureValue(11.7);

    reset();
  }

  return (
    <div className="flex h-auto p-5 overflow-y-scroll overflow-auto w-full justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col w-[40%] border-2 border-slate-200 gap-2 rounded-md px-8 py-6 shadow-md"
      >
        <img
          src={FlatFoundationImg}
          alt="Plytinio pamato nuotrauka"
          className="w-full h-full object-cover rounded-md mb-3"
        />
        <div
          className={`flex  justify-center items-center border-b border-slate-200 pb-4 `}
        >
          <div className="flex justify-between items-center gap-1 w-1/2">
            <Tooltip
              tooltip={
                <>
                  Priklausomai nuo reikalingo <br /> pamato stiprumo, <br />
                  taip pat nuo oro sąlygų.
                </>
              }
            >
              <IoInformationCircleOutline className="w-6 h-6 cursor-pointer text-yellow-600 hover:text-yellow-700 transition-all" />
            </Tooltip>

            <Label htmlFor="cement">Cemento tipas</Label>
          </div>

          <Select required={true}>
            <SelectTrigger id="cement" className="w-1/2">
              <SelectValue placeholder="Pasirinkite cemento tipą" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CEM I 52,5 R">CEM I 52,5 R</SelectItem>
              <SelectItem value=" CEM I 42,5 R">CEM I 42,5 R</SelectItem>
              <SelectItem value="CEM I 42,5 N">CEM I 42,5 N</SelectItem>
              <SelectItem value="CEM II/A-LL 42,5 N">
                CEM II/A-LL 42,5 N
              </SelectItem>
              <SelectItem value="CEM II/A-LL 42,5 R">
                CEM II/A-LL 42,5 R
              </SelectItem>
              <SelectItem value="CEM II/A-S 42,5N">CEM II/A-S 42,5N</SelectItem>
              <SelectItem value="CEM III/B 32,5N-LH /SR">
                CEM III/B 32,5N-LH /SR
              </SelectItem>
              <SelectItem value="CEM I 42,5N-SR3">CEM I 42,5N-SR3</SelectItem>
              <SelectItem value="CEM II/A-P 52,5N">CEM II/A-P 52,5N</SelectItem>
            </SelectContent>
          </Select>

        </div>
        <FormInput
          errors={errors}
          id="width"
          label="Pamatų plotis (m)"
          placeholder="Įveskite plotį (m)"
          register={register}
          tooltip={
            <>
              Pamatų klojimo plotis. <br /> Matavimo vienetas - metrai.
            </>
          }
        />
        <FormInput
          errors={errors}
          id="length"
          label="Pamatų ilgis (m)"
          placeholder="Įveskite ilgį (m)"
          register={register}
          tooltip={
            <>
              Pamatų klojimo ilgis. <br /> Matavimo vienetas - metrai.
            </>
          }
        />
        <FormInput
          errors={errors}
          id="height"
          label="Pamatų aukštis (mm)"
          placeholder="Įveskite aukštį (mm)"
          register={register}
          tooltip={
            <>
              Pamatų sekcijos aukštis. <br /> Matavimo vienetas - milimetrai.
            </>
          }
        />

        <div className="my-8 ">
          <div
            onClick={() => setArmatureDropdown((prev) => !prev)}
            className="flex cursor-pointer gap-2 justify-center mb-6 items-center group"
          >
            {!armatureDropdown ? (
              <FiPlusCircle className="w-8 h-8 cursor-pointer text-yellow-600 group-hover:text-yellow-700 transition-all" />
            ) : (
              <FiMinusCircle className="w-8 h-8 cursor-pointer text-yellow-600 group-hover:text-yellow-700 transition-all" />
            )}
            <p className="text-l transition-all border-b-2 border-transparent group-hover:border-current group-hover:text-yellow-700 text-yellow-600 font-semibold tracking-wide">
              Armatūros skaičiavimas
            </p>
          </div>

          {armatureDropdown && (
            <div className="self-start">
              <FormInput
                id="armatureLength"
                label="Armatūros ilgis (m)"
                placeholder="Įveskite armatūros ilgį (m)"
                register={register}
                errors={errors}
                tooltip={
                  <>
                    Pirktų armatūros strypų ilgis. <br />
                    Matavimo vienetas - metrai.
                  </>
                }
                defaultValue={armatureValue}
              />
            </div>
          )}
        </div>

        <Button className="self-end">Apskaičiuoti</Button>
      </form>
    </div>
  );
}

export default FlatFoundationForm;
