//style
import "../assets/styles/list.scss";

function List() {
	return (
		<div className="list-box d-flex justify-content-center p-4">
			<article class="list w-100">
				<table class="table table-hover">
					<thead>
						<tr>
							<th scope="col" colspan="4">
								فهرست
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row"></th>
							<td colSpan="3">این یک متن آزمایشی برای جانمایی متون است</td>
						</tr>
						<tr>
							<th scope="row"></th>
							<td colSpan="3">این یک متن آزمایشی برای جانمایی متون است</td>
						</tr>
						<tr>
							<th scope="row"></th>
							<td colSpan="3">این یک متن آزمایشی برای جانمایی متون است</td>
						</tr>
						<tr>
							<th scope="row"></th>
							<td colSpan="3">این یک متن آزمایشی برای جانمایی متون است</td>
						</tr>
						<tr>
							<th scope="row"></th>
							<td colSpan="3">این یک متن آزمایشی برای جانمایی متون است</td>
						</tr>
						<tr>
							<th scope="row"></th>
							<td colSpan="3">این یک متن آزمایشی برای جانمایی متون است</td>
						</tr>
					</tbody>
				</table>
			</article>
		</div>
	);
}

export default List;
