ActiveAdmin.register Client do


  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # permit_params :list, :of, :attributes, :on, :model
  #
  # or
  #
  # permit_params do
  #   permitted = [:permitted, :attributes]
  #   permitted << :other if resource.something?
  #   permitted
  # end
  controller do
    def create
      @client = Client.new(client_params)

      respond_to do |format|
        if @client.save
          format.html { redirect_to admin_clients_path, notice: 'Client was successfully created.' }
          format.json { render :show, status: :created, location: @client }
        else
          format.html { render :new }
          format.json { render json: @client.errors, status: :unprocessable_entity }
        end
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_client
        @client = Client.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def client_params
        params.require(:client).permit(:name, :description, :picture)
      end
  end

end
