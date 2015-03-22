class Api::V1::QuestionsController < ApiController
  respond_to :json
  load_and_authorize_resource except: [:index]
    
  def index
    scope = Question.accessible_by(current_ability).includes(:question_options)
    scope = scope.where(id: params[:ids]) if params[:ids].present?
    respond_with scope.all
  end
  
  def show
    respond_with @question
  end
  
  def create
    @question = Question.new(question_params)
    @question.caption ||= case @question
    when Questions::Field then "Click here to type a question."
    else ""
    end
    @question.save
    
    respond_with @question
  end
  
  def destroy
    @question.destroy
    respond_with @question
  end
  
  def update
    @question.update_attributes(question_params)
    respond_with @question
  end
  
  private
  def question_params
    params.require(:question).permit(:type, :position, :caption, :required, :min, :max, :step, :default_answer, :layout, :radio_layout, :purpose)
  end
end