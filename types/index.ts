import { CarDetails } from "@/components";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles: string;
    btnType?: 'button' | 'submit';
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
    isDiasbled?: boolean;
}

export interface FilterProps {
    title: string;
}

export interface ManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarCardProps {
    car: {
        city_mpg: number;
        class: string;
        combination_mpg: number;
        cylinders: number;
        displacement: number;
        drive: string;
        fuel_type: string;
        highway_mpg: number;
        make: string;
        model: string;
        transmission: string;
        year: number;
    }
}
export interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: {
        city_mpg: number;
        class: string;
        combination_mpg: number;
        cylinders: number;
        displacement: number;
        drive: string;
        fuel_type: string;
        highway_mpg: number;
        make: string;
        model: string;
        transmission: string;
        year: number;
    }
}

export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string
}
export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean
}