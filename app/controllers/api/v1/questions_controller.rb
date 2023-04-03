class Api::V1::QuestionsController < ApplicationController 
    protect_from_forgery with: :null_session

    def index
        page = (params[:page] || 1).to_i
        per_page = (params[:per_page] || 5).to_i
        offset = (page - 1) * per_page
    
        if params[:tags].present? && params[:tags] != 'All'
          @questions = Question.where(tag: params[:tags]).limit(per_page).offset(offset)
        else
          @questions = Question.limit(per_page).offset(offset)
        end
        render json: @questions, status: :ok
      end

    def update_counter
        @question = Question.find(params[:id])
        if params[:count_for] == 'like'
            @question.update(likes_count: @question.likes_count + 1)
        elsif params[:count_for] == 'dislike'
            @question.update(dislikes_count: @question.dislikes_count + 1)
        end
        render json: @question, status: :ok
    end

    def create 
        @question = Question.new(question_params)
        if @question.save
            render json: {data: @question, status:'success'}, status: :ok
        else
            render json: {data: @question.errors.full_messages, status:'failure'}, 
            status: :unprocessable_entity
        end
    end

    private

    def question_params
        params.require(:question).permit(:title, :tag)
    end
end
