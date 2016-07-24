shared_examples :developers_repository do
  let(:valid_form) do
    AddDeveloperToListForm.new(
      snapchat_username: 'test_user',
      full_name: 'test full name',
      about: 'test about'
    )
  end
  let(:repo) { described_class.new }
  let(:snapcode_image) { '<fake_snapcode />' }

  def create_developers(amount)
    amount.times do |i|
      form = valid_form.tap { |f| f.snapchat_username = "test_user#{i}" }
      repo.create(form, snapcode_image)
    end
  end

  describe '#create' do
    context 'with valid form and snapcode image' do
      it 'creates Developer record and returns it' do
        result = repo.create(valid_form, snapcode_image)
        expect(result).to be_a Developer
        expect(result.snapchat_username).to eq valid_form.snapchat_username
        expect(result.full_name).to eq valid_form.full_name
        expect(result.about).to eq valid_form.about
        expect(result.snapcode_image).to eq snapcode_image
        expect(repo.count).to eq 1
      end
    end
    context 'when id is not unique' do
      it 'raises an exception' do
        repo.create(valid_form, snapcode_image)
        expect do
          repo.create(valid_form, snapcode_image)
        end.to raise_error described_class::SnapchatUsernameNotUnique
      end
    end
  end

  describe '#find' do
    context 'with correct id' do
      it 'returns Developer record' do
        repo.create(valid_form, snapcode_image)
        id = repo.load_all.first.id
        result = repo.find(id)
        expect(result).to be_a Developer
        expect(result.full_name).to eq "test full name"
      end
    end

    context 'with incorrect id' do
      it 'returns Developer record' do
        expect do
          repo.find(123456)
        end.to raise_error described_class::RecordNotFound
      end
    end
  end

  describe '#find_by' do
    context 'with correct params' do
      it 'returns Developer record' do
        repo.create(valid_form, snapcode_image)
        result = repo.find_by(snapchat_username: 'test_user')
        expect(result).to be_a Developer
        expect(result.full_name).to eq "test full name"
      end
    end

    context 'with incorrect id' do
      it 'returns Developer record' do
        expect do
          repo.find_by(snapchat_username: 'bad_id')
        end.to raise_error described_class::RecordNotFound
      end
    end
  end

  describe '#load_all' do
    it 'returns Developer record' do
      create_developers(3)
      result = repo.load_all
      expect(result.size).to eq 3
      expect(result[0].snapchat_username).to eq "test_user0"
    end
  end

  describe '#load_page' do
    it 'returns paginated records' do
      create_developers(10)
      result = repo.load_page(page: 2, per_page: 2)
      expect(result.size).to eq 2
      expect(result[0].snapchat_username).to eq "test_user2"
      expect(result[1].snapchat_username).to eq "test_user3"
    end
  end

  describe '#count' do
    it 'returns paginated records' do
      create_developers(3)
      result = repo.count
      expect(result).to eq 3
    end
  end
end
