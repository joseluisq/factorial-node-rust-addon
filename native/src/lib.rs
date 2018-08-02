#[macro_use]
extern crate neon;

use neon::prelude::*;

fn factorial(mut cx: FunctionContext) -> JsResult<JsNumber> {
    let n = cx.argument::<JsNumber>(0)?.value();
    let mut total: f64 = 1.0;
    let mut i: f64 = 1.0;

    while i <= n {
        total = total * i;
        i = i + 1.0;
    }

    Ok(cx.number(total))
}

register_module!(mut cx, {
    cx.export_function("factorial", factorial)
});
