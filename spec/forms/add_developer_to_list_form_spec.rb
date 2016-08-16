require 'rails_helper'

RSpec.describe AddDeveloperToListForm do
  let(:valid_params) {{
    snapchat_username: 'test_user',
    full_name: 'test full name',
    about: 'test about'
  }}
  describe '#valid?' do
    context 'with valid params' do
      it "returns true and doesn't set any error" do
        form = described_class.new(valid_params)
        expect(form).to be_valid
        expect(form.errors).to be_empty
      end
    end
    context 'with empty snapchat_username' do
      it 'returns false and set proper error' do
        form = described_class.new(valid_params.merge(snapchat_username: ''))
        expect(form).to be_invalid
        expect(form.errors[:snapchat_username]).to be_present
      end
    end
    context 'with empty full_name' do
      it 'returns false and set proper error' do
        form = described_class.new(valid_params.merge(full_name: ''))
        expect(form).to be_invalid
        expect(form.errors[:full_name]).to be_present
      end
    end
    context 'with empty about' do
      it 'returns false and set proper error' do
        form = described_class.new(valid_params.merge(about: ''))
        expect(form).to be_invalid
        expect(form.errors[:about]).to be_present
      end
    end
  end
  describe '#to_h' do
    it 'converts form to hash' do
      form = described_class.new(valid_params)
      hash = form.to_h
      expect(hash).to be_a Hash
      expect(hash).to eq valid_params
    end
  end
end
