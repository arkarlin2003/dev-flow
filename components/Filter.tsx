import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterProps {
  filers: { name: string; value: string }[];
}

const Filter = ({ filers }: FilterProps) => {
  return (
    <div className="max-md:block hidden w-full">
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a Filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filers.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filter;
