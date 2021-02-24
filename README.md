# Base64BarcodeAPI

API to get base64 string of a barcode based on query parameters. The solution uses [JsBarcode](https://github.com/lindell/JsBarcode) to create barcode.

## How To Run?

- ```git clone https://github.com/zohaib194/Base64BarcodeAPI.git```
- ```npm install```
- ```npm start```

## Endpoints
- /GetBarcode
    - Query Params:
        - barcode
        - format = CODE128 (default)
        - lineColor = #000000 (default)
        - width = 2 (default)
        - height = 100 (default)
        - displayValue = true (default)
- Response - Success
```
{
	"result": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAACOCAYAAACIYK5gAAAABmJLR0QA/wD/AP+gvaeTAAADWklEQVR4nO3dv0vrUBiH8dOLi4iitCjiVCyIu5tQaUFEnETQVZzcnF1d3PwBVRQRdHGrIHFx8w9w0kWsBXEQKtboIkWo753uhfs0va0h0g7fD3QJb05OHkIsLo2ZmTn561erN9BuFAQUBBQEFAQUBBQEFAQUBDqaHYzFYoHH+UW31XPNHq9HTwgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIKAgoCCgIxPRrqv/SEwIKAgoCCgIKAgoCCgI/FuTz8/Onlv5RkQapVCrO8zy3tLTkBgYGGs5fXFy4yclJ193d7fr7+93s7Ky7u7sLnH1/f3c7OztuamrKJRIJF4/HXTqddufn51HegnMWkc3NTVteXraTkxMrl8vWaOnDw0NLJpOWz+fN9317fn62ra0ti8fjdn19XTM/Pj5uKysrdnV1Zb7vm+/75nmepVIpOzg4iOo2LLIgNQs3CDI6OmqFQqHmeC6Xs0wm0/R1bm5uLJlMfnt/9bQsSD3lctl6enqani8UCjY4OBjqWkHa7q9MqVRymUym4VylUnGXl5dubm7Ora2tRbeByNJCmKWr1aqtrq7a6+vrf+dSqZQ556y3t9fOzs7CbjFQWwXJ5XL29PTUcK5ardrj46Ntb2/bzMyMvby8hNlioLYJcnR0ZA8PD9++zunpqS0uLn77vHraIsj+/r7d39+Huk6pVLJEIhHq3CAtf6nu7u66iYkJNzw8HOr8r6+vSL8VtzRIPp936XTajYyMhF7j+PjYTU9PR7epyJ41aLS053mB30jNzLLZbM2xhYUF29vbs9vbW/v4+LBisWgbGxs2NDTU1Iu4WZEGyWaz5pyr+QTdYFdXV+Dsnw+9vb3Z+vq6jY2NWWdnp/X19dn8/LwVi8Uob8H0X3do+Uu13SgIKAgoCCgIKAgoCCgIKAj8Bt0hPNecFXvwAAAAAElFTkSuQmCC",
	"error": null,
	"query": {
		"barcode": "123",
		"format": "pharmacode",
		"lineColor": "#000000",
		"width": 2,
		"height": 100,
		"displayValue": true
	}
}
```

- Response - Error
```
{
	"result": null,
	"error": "\"he\" is not a valid input for pharmacode",
	"query": {
		"barcode": "he",
		"format": "pharmacode",
		"lineColor": "#000000",
		"width": 2,
		"height": 100,
		"displayValue": true
	}
}
```
