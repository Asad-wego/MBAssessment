interface structuredFormatting {
    main_text: string;
    secondary_text: string;
}

interface Location {
    description: string;
    place_id: string;
    reference: string;
    structured_formatting: structuredFormatting
}