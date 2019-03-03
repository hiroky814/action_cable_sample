class TopController < ApplicationController
  def show
    @text = Text.all
  end

  def create
    @texts = Text.new(text: params[:message])
    @texts.save
  end
end
