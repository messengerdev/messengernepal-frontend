export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export interface RegisterFormErrors {
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  general?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  createdAt: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

