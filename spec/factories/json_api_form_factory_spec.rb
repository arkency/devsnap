require 'rails_helper'

RSpec.describe JsonApiFormFactory do
  class FakeForm
    attr_accessor :first_param, :second_param

    def initialize(params = {})
      @first_param = params[:first_param]
      @second_param = params[:second_param]
    end
  end

  describe '.build' do
    it 'builds form object with params extracted from JSONApi data structure' do
      json_api_params = {
        data: {
          attributes: {
            'first-param': 'Foo',
            'second-param': 'Bar'
          }
        }
      }

      form = described_class.build(FakeForm, json_api_params)
      expect(form.first_param).to eq 'Foo'
      expect(form.second_param).to eq 'Bar'
    end
  end
end
