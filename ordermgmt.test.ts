import { Order } from './ordermgmt';  

describe('Test for order management scenarios', () => {
  let order: Order;

  beforeEach(() => {
    order = new Order();
  });

  it('Test whether able to add single item to the order', () => {
    order.addItem(99222, 1);
    expect(order.getItems()).toEqual([{ productId: 99222, quantity: 1 }]);
  });

  it('Test whether able to add multiple items to the order', () => {
    order.addItem(10002, 90 );
    order.addItem(13555, 900 );
    order.addItem(62778, 9000 );
    order.addItem(27882, 90 );
    order.addItem(10002, 90 );
    expect(order.getItems()).toEqual([{ productId: 10002, quantity: 90 },{productId: 13555, quantity: 900},
      {productId: 62778, quantity: 9000},{productId: 27882, quantity: 90},{productId: 10002, quantity: 90}]);
  });

  
  it('Test whether we can add same items to the order again', () => {
    order.addItem(10002, 90 );
    order.addItem(10002, 90 );
    console.log(order.getItems());
    expect(order.getItems()).toEqual([{ productId: 10002, quantity: 90 },{ productId: 10002, quantity: 90 }]);
  });

  it('Test whether able to remove item from the order', () => {
    order.addItem(8900, 1);
    order.removeItem(8900);
    expect(order.getItems()).toEqual([]);
  });

  it('Test whether able to remove multiple items from the order', () => {
    order.addItem(6900, 1);
    order.addItem(7900, 5);
    order.addItem(8900, 1);
    order.removeItem(8900);
    order.removeItem(7900);
    expect(order.getItems()).toEqual([{productId:6900,quantity:1}]);
  });

  it('Test whether order is processed if there are items', () => {
    order.addItem(929291, 2);
    order.processOrder();
    expect(order.isOrderProcessed()).toBe(true);
  });

  it('Test whether error displayed when trying to process empty order', () => {
    expect(order.getItems()).toEqual([]);
    expect(() => order.processOrder()).toThrowError('Cannot process an order with no items');
  });

  it('Test whether error displayed when adding an item from a processed order', () => {
    order.addItem(892921, 2);
    order.processOrder();
    expect(() => order.addItem(90,90)).toThrowError('Cannot add items to an already processed order.');
  });


  it('Test whether error displayed when removing an item from a processed order', () => {
    order.addItem(9000, 2);
    order.processOrder();
    expect(() => order.removeItem(9000)).toThrowError('Cannot remove items from an already processed order.');});


  
});