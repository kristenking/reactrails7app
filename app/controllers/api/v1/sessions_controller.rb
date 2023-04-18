class Api::V1::SessionsController < Devise::SessionsController
    protect_from_forgery with: :null_session
  
    respond_to :json

    def create
      self.resource = warden.authenticate!(auth_options)
      sign_in(resource_name, resource)
      render json: { message: 'Signed in successfully.' }, status: :ok
    end
  end
  