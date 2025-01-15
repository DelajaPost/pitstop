package com.example.app.user.api;

import com.example.app.refdata.api.OperatorId;
import com.example.app.user.authentication.Role;
import io.fluxcapacitor.javaclient.modeling.Aggregate;
import io.fluxcapacitor.javaclient.modeling.Alias;
import lombok.Builder;
import lombok.Value;

import static io.fluxcapacitor.javaclient.modeling.EventPublication.IF_MODIFIED;

@Aggregate(searchable = true, collection = "users", eventPublication = IF_MODIFIED)
@Value
@Builder(toBuilder = true)
public class UserProfile {
    UserId userId;
    UserDetails details;
    Role userRole;
    OperatorId operator;

    @Alias
    Email getEmail() {
        return details.getEmail();
    }
}
