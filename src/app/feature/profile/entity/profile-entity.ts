

export interface ProfileEntity {    
    // Overview
    title?: string;
    email?: string;
    phone?: string;
    location?: string;
    timezone?: string;

    // Password
    currentPassword?: string;
    newPassword?: string;
}
