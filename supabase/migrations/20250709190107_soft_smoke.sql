/*
  # Create Admin User Account

  1. New User
    - Creates admin user with email: admin@mwauraproperty.com
    - Sets encrypted password: admin123
    - Confirms email automatically
    - Creates corresponding identity record

  2. Security
    - Uses proper password encryption with bcrypt
    - Sets up email provider identity
    - Marks email as confirmed for immediate login
*/

-- Create admin user only if it doesn't exist
DO $$
DECLARE
    user_uuid uuid;
BEGIN
    -- Check if user already exists
    SELECT id INTO user_uuid FROM auth.users WHERE email = 'admin@mwauraproperty.com';
    
    -- If user doesn't exist, create it
    IF user_uuid IS NULL THEN
        -- Generate a new UUID for the user
        user_uuid := gen_random_uuid();
        
        -- Insert admin user into auth.users table
        INSERT INTO auth.users (
            instance_id,
            id,
            aud,
            role,
            email,
            encrypted_password,
            email_confirmed_at,
            invited_at,
            confirmation_token,
            confirmation_sent_at,
            recovery_token,
            recovery_sent_at,
            email_change_token_new,
            email_change,
            email_change_sent_at,
            last_sign_in_at,
            raw_app_meta_data,
            raw_user_meta_data,
            is_super_admin,
            created_at,
            updated_at,
            phone,
            phone_confirmed_at,
            phone_change,
            phone_change_token,
            phone_change_sent_at,
            email_change_token_current,
            email_change_confirm_status,
            banned_until,
            reauthentication_token,
            reauthentication_sent_at
        ) VALUES (
            '00000000-0000-0000-0000-000000000000',
            user_uuid,
            'authenticated',
            'authenticated',
            'admin@mwauraproperty.com',
            crypt('admin123', gen_salt('bf')),
            now(),
            now(),
            '',
            now(),
            '',
            null,
            '',
            '',
            null,
            null,
            '{"provider":"email","providers":["email"]}',
            '{}',
            false,
            now(),
            now(),
            null,
            null,
            '',
            '',
            null,
            '',
            0,
            null,
            '',
            null
        );

        -- Insert corresponding identity record
        INSERT INTO auth.identities (
            id,
            user_id,
            identity_data,
            provider,
            last_sign_in_at,
            created_at,
            updated_at
        ) VALUES (
            gen_random_uuid(),
            user_uuid,
            format('{"sub":"%s","email":"%s"}', user_uuid::text, 'admin@mwauraproperty.com')::jsonb,
            'email',
            now(),
            now(),
            now()
        );
        
        RAISE NOTICE 'Admin user created successfully with email: admin@mwauraproperty.com';
    ELSE
        RAISE NOTICE 'Admin user already exists with email: admin@mwauraproperty.com';
    END IF;
END $$;