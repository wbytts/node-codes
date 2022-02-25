var express = require('express');
var router = express.Router();

router.get('/hello', (req, res) => {
  res.send('Hello World');
});

router.post('/oms-consignor-pc/order/myOrder/queryConsignorBalance', (req, res) => {
  res.send(
    JSON.stringify({
      msg: 'success',
      code: 200,
      data: {
        onPassMoney: '',
        riskMoney: '',
        consignorBalanceMoney: '',
        oweMoney: '',
        showRiskMoneyMsg: '',
        cycleCreditUsedMoney: '',
        creditUsedMoney: '',
        creditAmountUsedMoney: '',
        usedMoney: '',
        deliverBondMoney: '',
      },
    })
  );
});

router.post('/test', (req, res) => {
  res.send(
    JSON.stringify({
      conSubList: [
        {
          upSettlePartId: '2',
          consignorShortName: '江苏中储',
          settleCount: 0,
          upSettlePartName: '江苏中储智运物流有限公司',
        },
        {
          upSettlePartId: '21',
          consignorShortName: '淮安分公司',
          settleCount: 0,
          upSettlePartName: '中储南京智慧物流科技有限公司淮安分公司',
        },
        {
          upSettlePartId: '3',
          consignorShortName: '江苏中储',
          settleCount: 0,
          upSettlePartName: '江苏中储智运物流有限公司',
        },
        {
          upSettlePartId: '22',
          consignorShortName: '桐城分公司',
          settleCount: 0,
          upSettlePartName: '江苏中储智运物流有限公司桐城分公司',
        },
        {
          upSettlePartId: '221',
          consignorShortName: '桐城分公司1',
          settleCount: 0,
          upSettlePartName: '江苏中储智运物流有限公司桐城分公司',
        },
        {
          upSettlePartId: '222',
          consignorShortName: '桐城分公司12',
          settleCount: 0,
          upSettlePartName: '江苏中储智运物流有限公司桐城分公司',
        },
        {
          upSettlePartId: '223',
          consignorShortName: '桐城分公司',
          settleCount: 0,
          upSettlePartName: '江苏中储智运物流有限公司桐城分公司',
        },
        {
          upSettlePartId: '233',
          consignorShortName: '桐城分公司3',
          settleCount: 0,
          upSettlePartName: '江苏中储智运物流有限公司桐城分公司',
        },
        {
          upSettlePartId: '2244',
          consignorShortName: '桐城分公司4',
          settleCount: 0,
          upSettlePartName: '江苏中储智运物流有限公司桐城分公司',
        },
        {
          upSettlePartId: '2255',
          consignorShortName: '桐城分公司5',
          settleCount: 0,
          upSettlePartName: '江苏中储智运物流有限公司桐城分公司',
        },

      ],
    })
  );
});

module.exports = router;
