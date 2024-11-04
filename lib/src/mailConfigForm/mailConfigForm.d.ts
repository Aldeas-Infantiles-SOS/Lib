/**
 * Representa los valores de configuración de correo.
 */
export type MailConfigFormValues = {
    /** Servidor smtp utilizado. */
    smtpServer: string;
    /** Puerto utilizado */
    port: number;
    /** Correo asociado a la configuración. */
    email: string;
    /** Contraseña asociada a la configuración. */
    password: string;
};
