interface Attributes {
    deviceImage?: string;
    'processing.copyAttributes'?: string;
    'decoder.timezone'?: string;
    speedLimit?: number;
    'web.reportColor'?: string;
    deviceInactivityStart?: number;
}

export interface Device {
    id: number;
    name: string;
    uniqueId: string;
    status: string;
    disabled: boolean;
    lastUpdate: string;
    positionId: number;
    groupId: number;
    phone: string | null;
    model: string | null;
    contact: string | null;
    category: string | null;
    attributes: Attributes;
}