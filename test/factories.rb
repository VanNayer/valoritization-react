FactoryGirl.define do

  sequence :email do |n|
    "email#{n}@factory.com"
  end

  sequence :phone_number do |n|
    "060708#{"%04d" % n}"
  end

  sequence :name do |n|
    "Un beau nom #{n}"
  end

  sequence :first_name do |n|
    # change first name improve readability when debugging
    case n % 4
    when 0 then "Alice#{n}"
    when 1 then "Bob#{n}"
    when 2 then "Charlie#{n}"
    when 3 then "David#{n}"
    end
  end

  sequence :last_name do |n|
    "Doe#{n}"
  end

  factory :user do
    email
    password 'michelmichel'
  end

  factory :matrix do
    name
    value :dollars
    cost :hours
  end

end
