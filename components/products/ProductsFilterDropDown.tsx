import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const ProductsFilterDropDown = ({ onCategoryChange }: { onCategoryChange: (category: string) => void }) => {
  const handleSelectCategory = (category: string) => {
    onCategoryChange(category);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <p className='text-primary font-bold'>Catégories</p>  
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup onValueChange={handleSelectCategory}>
          <DropdownMenuRadioItem value="PHONE">Phone</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="PC">PC</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Console">Console</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ACCESSOIRES">Accessoires</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductsFilterDropDown;
