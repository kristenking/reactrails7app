class Api::V1::RegistrationsController < Devise::RegistrationsController
    protect_from_forgery with: :null_session
  
    respond_to :json
  
    def create
      build_resource(sign_up_params)
  
      resource.save
      if resource.persisted?
        if resource.active_for_authentication?
          sign_up(resource_name, resource)
          render json: { message: "Signed up successfully." }, status: :created
        else
          expire_data_after_sign_in!
          render json: { message: "Account created and pending confirmation." }, status: :created
        end
      else
        clean_up_passwords(resource)
        puts "Error details: #{resource.errors.details}"
        puts "Error messages: #{resource.errors.full_messages}"
        render json: { errors: resource.errors }, status: :unprocessable_entity
      end
    end
  
    private
  
    def sign_up_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end
  end
  