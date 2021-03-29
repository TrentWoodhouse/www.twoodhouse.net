<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Contact extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $email;
    public $msg;

    /**
     * Create a new message instance.
     *
     * @param $name
     * @param $email
     * @param $msg
     */
    public function __construct(String $name, String $email, String $msg)
    {
        $this->name = $name;
        $this->email = $email;
        $this->msg = $msg;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.contact')
            ->subject('We\'ve been trying to reach you about your car\'s extended warranty');
    }
}
