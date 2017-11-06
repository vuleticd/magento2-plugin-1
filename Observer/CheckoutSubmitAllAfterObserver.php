<?php

namespace Nord\Shipfunk\Observer;

use Magento\Framework\Event\ObserverInterface;
use Magento\Framework\Event\Observer;
use Nord\Shipfunk\Model\Api\Shipfunk\SetOrderStatus;

/**
 * Class CheckoutSubmitAllAfterObserver
 *
 * @package Nord\Shipfunk\Observer
 */
class CheckoutSubmitAllAfterObserver implements ObserverInterface
{
    /**
     * @var SetOrderStatus
     */
    protected $SetOrderStatus;

    /**
     * CheckoutSubmitAllAfterObserver constructor.
     *
     * @param SetOrderStatus       $SetOrderStatus
     */
    public function __construct(
        SetOrderStatus $SetOrderStatus
    ) {
        $this->SetOrderStatus = $SetOrderStatus;
    }

    /**
     * @param Observer $observer
     */
    public function execute(Observer $observer)
    {
        /** @var Order $order */
        /** @noinspection PhpUndefinedMethodInspection */
        $order = $observer->getEvent()->getOrder();

        $this->SetOrderStatus
            ->setOrderId($order->getQuoteId())
            ->setFinalOrderId($order->getRealOrderId())
            ->setOrderStatus(SetOrderStatus::STATUS_PLACE)
            ->execute();
    }
}