# Quiz Master
- Simple Quiz Application

# UI (Mock)
- https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=quiz_master_quipper.xml#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D10jrO3Os8olcHXoy0woIDfNv0PVZ-2RVg%26export%3Ddownload

## Server
- Ruby 2.5.1
- Rails 5.2.1
- Postgresql 10.4

### Run

```
cd server
bundle install
rails db:create db:seed

rails s -p 5000
```

## Client
- ES6
- React 16.4.2

### Run

```
cd client
npm install

npm run start
```