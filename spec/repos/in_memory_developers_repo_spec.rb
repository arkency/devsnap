require 'rails_helper'
require 'repos/developers_repo_interface_spec'

RSpec.describe InMemoryDevelopersRepo do
  it_behaves_like :developers_repository
end
